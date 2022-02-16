import "./loader.css";

type Props = {
    type: string;
};
export default function Loader({ type }: Props) {
    if (type === "post") {
        return (
            <div className="ld19Post">
                <div className="ld19PostHead">
                    {/* <div className="skeleton-profile-image animate"></div> */}
                    <div className="skeleton-title animate"></div>
                </div>
                <div className="ld19PostBody">
                    <div className="image animate din"></div>
                </div>
                <div className="ld19PostFooter">
                    <div className="skeleton-caption animate"></div>
                    <div className="skeleton-caption short animate"></div>
                </div>
            </div>
        );
    }
    if (type === "suggestedUser") {
        return (
            <div className="ld19suggestedUser">
                <div className="left">
                    <div className="skeleton-profile-image animate"></div>
                </div>
                <div className="right">
                    <div className="skeleton-caption animate"></div>
                    <div className="skeleton-caption short animate"></div>
                </div>
            </div>
        );
    }
    if (type === "image") {
        return (
            <div className="ld19Image">
                <div className="animate skeleton-image image din"></div>
            </div>
        );
    }
    if (type === "userDetails") {
        return (
            <div className="ld19userDetails">
                <div className="left">
                    <div className="skeleton-profile-image animate"></div>
                </div>
                <div className="right">
                    <div className="animate skeleton-title"></div>
                    <div className="animate skeleton-title short"></div>
                    <div className="animate skeleton-caption"></div>
                    <div className="animate skeleton-caption"></div>
                    <div className="animate skeleton-caption short"></div>
                    <div className="stats">
                        <div className="animate skeleton-title"></div>
                        <div className="animate skeleton-title"></div>
                        <div className="animate skeleton-title"></div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="ld19Post">
            <div className="ld19PostHead">
                {/* <div className="skeleton-profile-image animate"></div> */}
                <div className="skeleton-title animate"></div>
            </div>
            <div className="ld19PostBody">
                <div className="image animate din"></div>
            </div>
            <div className="ld19PostFooter">
                <div className="skeleton-caption animate"></div>
                <div className="skeleton-caption short animate"></div>
            </div>
        </div>
    );
}
