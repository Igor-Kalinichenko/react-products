import ChangeTheme from "./ChangeTheme";

function Total({total}) {
    return <>
        <h5 className="mt-3">Total: {total.toFixed(2)} UAH</h5>
        <ChangeTheme />
    </>
}

export default Total;