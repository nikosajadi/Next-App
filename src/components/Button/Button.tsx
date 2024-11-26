type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  widthAll?: boolean; // Add this property
  buttonType?: keyof typeof theme.colors; // Add this property
};

export default function Button({
  type = 'button',
  children,
  widthAll = false, // Default value
  buttonType = 'primary', // Default value
}: ButtonProps) {
  const theme = useTheme();

  return (
    <button
      type={type}
      css={css`
        width: ${widthAll ? '100%' : 'auto'};
        background-color: ${theme.colors[buttonType]};
        color: white;
        font-size: ${theme.typography.paragraph};
        text-decoration: none;
        padding: 16px 24px;
        border: ${theme.border[1]};
        border-radius: ${theme.borderRadius[1]};
        display: inline-block;
        position: relative;
        cursor: pointer;
        transition-duration: 0.4s;
        &:hover {
          box-shadow: ${theme.boxShadow.light};
          background-color: ${theme.colors.secondary};
        }
        &:disabled {
          background-color: ${theme.colors.backgroundColorSecondary};
          cursor: no-drop;
        }
      `}
    >
      {children}
    </button>
  );
}
