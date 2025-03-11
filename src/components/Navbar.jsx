export const NavbarComponent = () => {
    return (
        <div className="fixed flex w-full h-16 text-xl bg-blue-50 justify-center items-center">
            <div className="flex w-[95%] justify-between items-baseline">
                <div className="text-3xl">Einar</div>
                <div className="flex gap-10">
                    <div>Home</div>
                    <div>About</div>
                    <div>Portfolio</div>
                    <div>Contact</div>
                </div>    
            </div>
            
        </div>
    )
}