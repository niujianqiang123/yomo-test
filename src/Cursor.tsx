import CursorChat from '@yomo/react-cursor-chat';
// Import theme styles
// import '@yomo/react-cursor-chat/dist/dracula.css';
// import '@yomo/react-cursor-chat/dist/apricot-yellow.css';
import '@yomo/react-cursor-chat/dist/hairy-green.css';

function CursorComp() {

    return <>
        <div className="main">
            {/* <img className="logo" src={logo} alt="logo" /> */}
            <p className="tips">
                Press <span>/</span> to bring up the input box <br /> Press{' '}
                <span>ESC</span> to close the input box
            </p>
            <CursorChat
                presenceURL="https://prsc.yomo.dev"
                presenceAuthEndpoint="/api/auth"
                avatar="https://cursor-chat-example.vercel.app/_next/image?url=%2Flogo.png&w=256&q=75"
            />
        </div>
    </>
}
export default CursorComp;