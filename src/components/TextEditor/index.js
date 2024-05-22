import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  AppContainer,
  ResponsiveContainer,
  Title,
  TextEditorImg,
  EditorContainer,
  StylingContainer,
  ButtonListItem,
  StylingButton,
  TextArea,
} from './styledComponents'

class TextEditor extends Component {
  state = {
    isBold: false,
    isItalic: false,
    isUnderline: false,
    textInput: '',
  }
  onChangeText = event => {
    this.setState({textInput: event.target.value})
  }
  onClickBold = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }
  onClickItalic = () => {
    this.setState(prevState => ({isItalic: !prevState.isItalic}))
  }
  onClickUnderline = () => {
    this.setState(prevState => ({isUnderline: !prevState.isUnderline}))
  }
  render() {
    const {isBold, isItalic, isUnderline, textInput} = this.state
    return (
      <AppContainer>
        <ResponsiveContainer>
          <div>
            <Title>Text Editor</Title>
            <TextEditorImg
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </div>
          <EditorContainer>
            <StylingContainer>
              <ButtonListItem>
                <StylingButton
                  type="button"
                  data-testid="bold"
                  onClick={this.onClickBold}
                  active={isBold}
                >
                  <VscBold size={20} />
                </StylingButton>
              </ButtonListItem>
              <ButtonListItem>
                <StylingButton
                  type="button"
                  data-testid="italic"
                  onClick={this.onClickItalic}
                  active={isItalic}
                >
                  <GoItalic size={20} />
                </StylingButton>
              </ButtonListItem>
              <ButtonListItem>
                <StylingButton
                  type="button"
                  data-testid="underline"
                  onClick={this.onClickUnderline}
                  active={isUnderline}
                >
                  <AiOutlineUnderline size={20} />
                </StylingButton>
              </ButtonListItem>
            </StylingContainer>
            <TextArea
              value={textInput}
              rows="10"
              cols="100"
              onChange={this.onChangeText}
              style={{
                fontWeight: isBold ? 'bold' : 'normal',
                fontStyle: isItalic ? 'italic' : 'normal',
                textDecoration: isUnderline ? 'underline' : 'normal',
              }}
            />
          </EditorContainer>
        </ResponsiveContainer>
      </AppContainer>
    )
  }
}
export default TextEditor
