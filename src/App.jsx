import { useState, useEffect } from 'react';
import { useDiagram } from './hooks/useDiagram';
import Sidebar from './components/Sidebar';
import Toolbar from './components/Toolbar';
import Canvas from './components/Canvas';
import PropertiesPanel from './components/PropertiesPanel';
import TitleBlock from './components/TitleBlock';
import BOMPanel from './components/BOMPanel';

export default function App() {
  const [mode,           setMode]           = useState('select');
  const [wireColor,      setWireColor]      = useState('#334155');
  const [simMode,        setSimMode]        = useState(false);
  const [showTitleBlock, setShowTitleBlock] = useState(false);
  const [showBOM,        setShowBOM]        = useState(false);
  const [projectInfo,    setProjectInfo]    = useState({
    project: '', drawnBy: '', date: '', revision: 'A', description: '',
  });

  const diagram = useDiagram();
  const TITLE_H = 72;

  // global copy/paste keyboard shortcuts
  useEffect(() => {
    const onKey = (e) => {
      const ctrl = e.ctrlKey || e.metaKey;
      if (['INPUT','TEXTAREA'].includes(document.activeElement?.tagName)) return;
      if (ctrl && e.key === 'c') { e.preventDefault(); diagram.copySelection(); }
      if (ctrl && e.key === 'v') { e.preventDefault(); diagram.pasteClipboard(); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [diagram.copySelection, diagram.pasteClipboard]);

  const handleModeChange = (m) => {
    if (simMode && m !== 'select') return; // lock mode during sim
    setMode(m);
  };

  const handleToggleSim = () => {
    setSimMode(s => !s);
    setMode('select');
  };

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden">
      <Toolbar
        mode={mode} onModeChange={handleModeChange}
        wireColor={wireColor} onWireColorChange={setWireColor}
        diagram={diagram}
        canUndo={diagram.canUndo} canRedo={diagram.canRedo}
        onUndo={diagram.undo} onRedo={diagram.redo}
        simMode={simMode} onToggleSim={handleToggleSim}
        showTitleBlock={showTitleBlock} onToggleTitleBlock={() => setShowTitleBlock(s => !s)}
        onShowBOM={() => setShowBOM(true)}
        projectInfo={projectInfo}
      />

      <div className="flex flex-1 overflow-hidden relative">
        <Sidebar />

        <div className="flex-1 overflow-hidden relative">
          <Canvas
            diagram={diagram}
            mode={mode} onModeChange={handleModeChange}
            wireColor={wireColor}
            simMode={simMode}
            titleBlockHeight={showTitleBlock ? TITLE_H : 0}
          />

          {showTitleBlock && (
            <TitleBlock
              info={projectInfo}
              onChange={patch => setProjectInfo(p => ({ ...p, ...patch }))}
            />
          )}
        </div>

        {/* Properties panel — component, wire, or multi-select */}
        {(diagram.selection.size > 0 || diagram.selectedWire) && (
          <PropertiesPanel
            placed={diagram.placed}
            wires={diagram.wires}
            selected={diagram.selected}
            selectedWire={diagram.selectedWire}
            selectionSize={diagram.selection.size}
            onUpdate={diagram.updateComponent}
            onDelete={diagram.deleteComponent}
            onRotate={diagram.rotateComponent}
            onUpdateWire={diagram.updateWire}
            onDeleteWire={diagram.deleteWire}
            onDeleteSelected={diagram.deleteSelected}
          />
        )}
      </div>

      {/* BOM modal */}
      {showBOM && (
        <BOMPanel
          placed={diagram.placed}
          wires={diagram.wires}
          onClose={() => setShowBOM(false)}
        />
      )}
    </div>
  );
}
