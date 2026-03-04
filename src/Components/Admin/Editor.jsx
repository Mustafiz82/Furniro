import React, { useState, useRef, useMemo, useCallback } from 'react';
import JoditEditor from 'jodit-react';

function Editor() {
  const editor = useRef(null);
  const [content, setContent] = useState('');

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: 'Start typing...'
    }),
    []
  );

  const handleBlur = useCallback((newContent) => {
    setContent(newContent);
  }, []);

  const handleChange = useCallback((newContent) => {
    // You can handle onChange here if needed
  }, []);

  return (
    <JoditEditor
      ref={editor}
      value={content}
      config={config}
      onBlur={handleBlur}
      onChange={handleChange}
    />
  );
}

export default Editor;
