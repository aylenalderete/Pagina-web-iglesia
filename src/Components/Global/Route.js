import { Route } from "react-router"
import Layout from "./Layout"


const RouteLayout = ({component: Component, ...rest}) => {
    return (
        <Route {...rest}>
            <Layout>
                <Component {...rest} />
            </Layout>
        </Route>
    )
}

export default RouteLayout