import {
  style
} from 'typestyle/lib'

export const branchStyle = style (
  {
    zIndex: 1,
    boxShadow: 'var(--jp-toolbar-box-shadow)',
    height: '100px',
    textAlign: 'center',
    overflowY: 'auto'
  }
)

export const branchLabelStyle = style (
  {
    fontSize: 'var(--jp-ui-font-size1)',
    marginTop: '5px',
    display: 'inline-block'
  }
)

export const branchIconStyle = style (
  {
    backgroundImage: 'var(--jp-Git-icon-branch)',
    display: 'inline-block',
    height: '14px',
    width: '14px',
    margin: '6px 10px -2px 0px',
    backgroundRepeat: 'no-repeat',
  }
)

export const branchDropdownStyle = style (
  {
    backgroundImage: 'var(--jp-image-caretdownwhite)',
    backgroundColor: 'transparent',
    flex: '0 0 auto',
    verticalAlign: 'middle',
    border: 'var(--md-grey-700)',
    borderRadius: '0',
    outline: 'none',
    width: '11px',
    height: '11px',
    marginTop: '8px',
    marginBottom: '2px',
    textIndent: '20px',
    '-webkit-appearance': 'none',
    '-moz-appearance': 'none',
  }
)

export const changeButtonStyle = style(
  {
    color: 'var(--jp-brand-color2)',
    fontSize: '10px',
    marginLeft: '5px'
  }
)

export const changeButtonDisabledStyle = style(
  {
    color: 'var(--jp-font-color2)'
  }
)

export const branchListItemStyle = style (
  {
    listStyle: 'none',
    color: 'var(--jp-ui-font-color1)'
  }
)

export const stagedCommitButtonStyle = style (
  {
    backgroundColor: 'var(--md-green-500)',
    color: 'white',
    height: '42px',
    width: '40px',
    border: '0',
    flex: '1 1 auto'
  }
)

export const stagedCommitButtonReadyStyle = style (
  {
    opacity: .3
  }
)

export const stagedCommitButtonDisabledStyle = style (
  {
    backgroundColor: 'lightgray'
  }
)