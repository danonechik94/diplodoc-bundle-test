import transform from "@diplodoc/transform";
import {
  configure,
  MarkdownEditorView,
  useMarkdownEditor,
} from "@gravity-ui/markdown-editor";
import { ThemeProvider } from "@gravity-ui/uikit";
import { toaster } from "@gravity-ui/uikit/toaster-singleton-react-18";

configure({
  lang: "en",
});

const content = `
# Header!

**Test!**

\`Hello!\`

\`\`\`
qsd
\`\`\`
`;

export const Editor = () => {
  const editor = useMarkdownEditor({
    allowHTML: false,
    initialToolbarVisible: true,
    preset: "commonmark",
  });
  const transformedContent = transform(content);

  return (
    <ThemeProvider>
      <div
        dangerouslySetInnerHTML={{ __html: transformedContent.result.html }}
      />
      <MarkdownEditorView
        autofocus
        toaster={toaster}
        editor={editor}
        stickyToolbar={false}
      />
    </ThemeProvider>
  );
};

export default Editor;
