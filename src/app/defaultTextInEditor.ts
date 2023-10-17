export const defaultTextInEditor = `
  # Markdown Previewer
  ## This app is useful to preview markdown files
  This basically converts text to an ${"`<HTMLElement>`"} so that the browser can render it
  ### How to use
  - Just type your text in the editor on the using markdown format
  - You will get your results in the preview box on the right

  > Codeblock
  ${"```"}
  Const Markdown = () => {
    return 'I ❤ Markdown'
  }
  ${"```"}
  
  **[Link to GitHub](https://github.com/craig-dsilva/markdown-previewer)**
  
  ![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)
`