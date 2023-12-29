import MonacoEditor from 'react-monaco-editor';
import { useEffect, useState } from "react";

export function CodeEditor() {
    const [code, setCode] = useState('');
    const [file, setFile] = useState();
    const [language, setLanguage] = useState('java');
    
    const options = {
        autoIndent: 'full',
        contextmenu: true,
        fontFamily: 'monospace',
        fontSize: 13,
        lineHeight: 24,
        hideCursorInOverviewRuler: true,
        matchBrackets: 'always',
        minimap: {
        enabled: true,
        },
        scrollbar: {
        horizontalSliderSize: 4,
        verticalSliderSize: 18,
        },
        selectOnLineNumbers: true,
        roundedSelection: false,
        readOnly: false,
        cursorStyle: 'line',
        automaticLayout: true,
    }; 

  

    const handleFileChange = (event) => {
      if (event.target.files) {
        setFile(event.target.files[0]);
      }
    };
  
    useEffect(() => {
      if (file) {
        var reader = new FileReader();
        reader.onload = async (e) => {
          setCode(e.target.result);
        };
        reader.readAsText(file);
        let newLanguage = 'java';
        const extension = file.name.split('.').pop();
        if (['java'].includes(extension)) {
          newLanguage = extension;
        }
        setLanguage(newLanguage);
      }
    }, [file]);
  
  // The Options object goes here and is passed to the editor below
  
    return (
      <div>
        <div>
          <input type="file" onChange={handleFileChange} /> 
        </div>
        <hr />
        <MonacoEditor
          height="600"
          language={language}
          value={code}
          options={options}
          theme='vs-dark' 
        />
      </div>
    );
  };
  