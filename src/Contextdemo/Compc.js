import React from 'react'
import { userContext } from "./Compa";

function Compc() {
    return (
        <div>
            {
                <userContext.Consumer>
                    {
                        value => {
                            return <div>value: {value}</div>
                        }
                    }
                </userContext.Consumer>
            }
        </div>
    )
}

export default Compc
