import React, {useState, useEffect} from "react";
import axios from "axios"
import {Table} from "react-bootstrap"

function CoffeeList(props) {
    const [products, setProducts] = useState([]);
    
    useEffect( () =>{
        const fetchData = async () =>{
            const result = await axios(
                "http://localhost:9090/"
            );
            console.log(result.data);
            setProducts(result.data);
        }
        fetchData()
    }, [])

    return(
        <div>
            <h1>Menu</h1>
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>SKU</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(e => (
                            <tr key={e.id}>
                                <td>{e.name}</td>
                                <td>{e.price}</td>
                                <td>{e.sku}</td>
                            </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default CoffeeList