import styled from 'styled-components'

export const AppContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    min-height:100vh;
    background-color:#25262c;
`
export const ResponsiveContainer = styled.div`
    background-color: #1b1c22;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:20px;
`
export const Title = styled.h1`
    color:#f8fafc;
    font-family:"Roboto";
    font-size:24px;
    font-family:500;
    text-align:center;
`
export const TextEditorImg = styled.img`
    width:250px;
    margin:20px;
`
export const EditorContainer = styled.div`
    background-color:#25262c;
    border-radius: 8px;
    border: 1px solid #334155;
    width:250px;
    align-self:flex-start;
    
`
export const StylingContainer = styled.ul`
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    border-bottom: 1px solid #334155;
    padding:10px;
`
export const ButtonListItem = styled.li`
    list-style-type:none;
`
export const StylingButton = styled.button`
    border:none;
    background:transparent;
    outline:none;
    cursor:pointer;
    margin-right:5px;
    color: ${props => (props.active === true ? '#faff00' : '#f1f5f9')}
`
export const TextArea = styled.textarea`
    color:#f1f5f9;
    font-family:"Roboto";
    font-size:14px;
    background:transparent;
    outline:none;
    border:none;
    width:100%;
    padding:10px;
    height:300px;

`
