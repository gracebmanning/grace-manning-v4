export default function PageDoesNotExist(){
    return(
        <div className="section-solid">
            <p>oops! This page doesn't exist.</p>
            <br/>
            <a href="/" style={{fontSize: '25px', textDecoration:'underline'}}>take me home!</a>
        </div>
    );
}