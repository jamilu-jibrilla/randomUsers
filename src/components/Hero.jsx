import { Link } from "react-router-dom"

const Hero = () => {
    return (
        <div className="Hero">
            <div class="jumbotron">
                <div class="containa">
                    <div class="main">
                        <h1>Random user generator</h1>
                        <Link to={'users'} class="btn-main">generate users</Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero