import { useEffect, useState } from "react"
import NavBar from "../NavBar/NavBar"
import './index.css'



function Home() {
    const [data, setData] = useState([])
    const [shop, setShop] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)



    const addShop = (product) => {
        const existingItem = shop.find(item => item.id === product.id)
        if (existingItem) {

            const updatedShop = shop.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            )
            setShop(updatedShop)
        } else {

            setShop([...shop, { ...product, quantity: 1 }])
        }
    }

    const removeItem = (id) => {
        const updatedShop = shop.map(item =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        ).filter(item => item.quantity > 0)
        setShop(updatedShop)
    }

    const addItem = (id) => {
        const updatedShop = shop.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ).filter(item => item.quantity > 0)
        setShop(updatedShop)
    }


    useEffect(() => {
        const price = shop.reduce((total, item) => total + item.price * item.quantity, 0)
        setTotalPrice(price)


    }, [shop])







    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                setData(data)

                const uniqueCategories = [...new Set(data.map(item => item.category))]
                // eslint-disable-next-line no-undef
                setCategories(uniqueCategories)
            })
    }, [])

    return (
        <>
            <NavBar />
            <div className='product' >
                {data.map(product => (
                    <button className="item" key={product.id}>
                        <img className="image" src={product.image} alt={product.title} />

                        <h2 className="title">{product.title}</h2>

                        <p className="price">Valor: R${product.price}</p>

                        <br />

                        <button className="btn-add" onClick={() => addShop(product)}  >Adicionar</button>
                    </button>
                ))}
            </div>

            <div className="cartTab">
                <h1 className="titleCart">RESUMO DA COMPRA</h1>

                <div id='carrinho'>
                    <ul id='carrinhoDeCompras'>
                        {shop.map(item => (
                            <li key={item.id}>
                                <img className="imageSize" src={item.image} alt={item.title} />
                                {item.title} - R${item.price} x {item.quantity}
                                <button onClick={() => addItem(item.id)}>add</button>
                                <button onClick={() => removeItem(item.id)}>remove</button>
                            </li>
                        ))}
                    </ul>
                    <h2>Total: ${totalPrice.toFixed(2)}</h2>

                    <div className="btn">
                        <button className="close">CANCELAR</button>
                        <button className="checkOut">FINALIZAR</button>
                    </div>

                </div>
            </div>






        </>
    )
}

export default Home

