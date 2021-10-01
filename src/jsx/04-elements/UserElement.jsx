const UserElement = ({children, mod}) => <span className={`user-element ${mod ? mod : ''}`}>{children}</span>
    
export { UserElement }