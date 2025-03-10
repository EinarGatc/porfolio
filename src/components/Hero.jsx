import Typewriter from 'typewriter-effect';
export const HeroProfile = () => {
    return (
        <div className="w-[95%] mt-16 h-[calc(100vh-4rem)] bg-[#0F0F0F]  rounded-4xl py-5 px-20">
            <div className="flex text-white font-secondary items-center h-full">
                <div className="flex flex-col text-4xl w-3/4 justify-start space-y-4">
                    <span className="text-6xl text-gray-400">Einar Gatchlian</span>
                    <span className='ml-1'>
                        <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString('I am a Software Engineer')
                                .pauseFor(1000)
                                .deleteChars(18)
                                .typeString(' Teacher')
                                .pauseFor(1000)
                                .deleteChars(8)
                                .typeString(' Researcher')
                                .pauseFor(1000)
                                .start();
                            }}
                            options={{
                                loop: true,
                            }}
                        />
                    </span>
                </div>
                <div className="w-1/4">
                    img
                </div>
            </div>
        </div>
    )
}