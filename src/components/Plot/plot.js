
// ██████╗░██╗░░░░░░█████╗░████████╗
// ██╔══██╗██║░░░░░██╔══██╗╚══██╔══╝
// ██████╔╝██║░░░░░██║░░██║░░░██║░░░
// ██╔═══╝░██║░░░░░██║░░██║░░░██║░░░
// ██║░░░░░███████╗╚█████╔╝░░░██║░░░
// ╚═╝░░░░░╚══════╝░╚════╝░░░░╚═╝░░░

export default function Plot({ plot }) {
    return (<>
        <div className="description">
            <div className="column">
                <p>{ plot }</p>
            </div>
            {/* <!-- end column --> */}
        </div>
        {/* <!-- end description --> */}
    </>);
}