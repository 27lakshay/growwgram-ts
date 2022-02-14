import "./loader.css";

export default function Loader({ type }) {
    if (type === "post") {
        return (
            <div className="ld19Post card br">
                <div className="wrapper">
                    <div className="profilePic animate din"></div>
                    <div className="image animate din"></div>
                    <div className="comment br animate w80"></div>
                    <div className="comment br animate"></div>
                    <div className="comment br animate"></div>
                </div>
            </div>
        );
    }
    if (type === "suggestedUser") {
        return (
            <div className="ld19suggestedUser card br">
                <div className="wrapper">
                    <div className="profilePic animate din"></div>
                    <div className="comment br animate w80"></div>
                    <div className="comment br animate"></div>
                    <div className="comment br animate"></div>
                </div>
            </div>
        );
    }
    if (type === "image") {
        return (
            <div className="ld19Image card br">
                <div className="wrapper">
                    <div className="image animate din"></div>
                </div>
            </div>
        );
    }
    if (type === "userDetails") {
        return (
            <div className="ld19userDetails card br">
                <div className="wrapper">
                    <div className="profilePic animate din"></div>
                    <div className="comment br animate w80"></div>
                    <div className="comment br animate"></div>
                    <div className="comment br animate"></div>
                </div>
            </div>
        );
    }
    return (
        <div className="ld19Post card br">
            <div className="wrapper">
                <div className="profilePic animate din"></div>
                <div className="comment br animate w80"></div>
                <div className="comment br animate"></div>
                <div className="comment br animate"></div>
            </div>
        </div>
    );
}
