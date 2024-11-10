import Button from "./Button"


function Home(){
    return (
        <>
        <Button text='Login' second={1} />
        <Button text='Register' second={2} />
        <Button text='Logout' second={3}/>
        </>
    )
}


export default Home