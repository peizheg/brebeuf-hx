const Info = () => {
    return (
        <div>
            <div className='h-screen w-3/5 m-auto flex flex-row items-center gap-10'>
                <img src='/ganymede.png' className='h-3/6 mb-40'/>
                <div className="mb-24">
                    <h1 className="text-6xl mb-8 font-medium">Project Ganymède</h1>
                    <p className="mb-6 text-xl">Une initiative étudiante qui lutte contre l'exclusion sociale des personnes itinérantes dans le quartier Côte-des-Neiges.</p>
                    <button className="py-2 px-4 bg-[#c9d7d7] rounded-lg hover:bg-[#b2bfbf] transition">{"Devenir bénévole aujourd'hui >>"}</button>
                </div>
            </div>


            <div className="bg-[#e6e1db] py-16 px-40 mx-60 my-20 rounded-2xl">
                <h3 className="text-5xl mb-8">Qui sommes-nous?</h3>
                <div className="flex align-center gap-16">
                    <p className="text-lg">Fondé en 2023, Ganymède est une initiative de onze étudiants du collégial. Constatant la réalité et les dangers de l'itinérance dans le quartier Côte-des-Neiges, les membres fondateurs décident d'organiser un groupe qui distribuera, quotidiennement, de l'eau, du café ou du bouillon aux personnes itinérantes du quartier et engagera la discussion avec eux. De cette façon, Ganymède cherche à atténuer la pression de deux dangers importants pour les personnes itinérantes : les risques liés à la température et l'exclusion sociale. Nous espèrons réduire les risques d'insolation et d'hypothermie guettant les personnes itinérantes ; en discutant avec elles, nous souhaitons leur fournir un besoin de première nécessité fréquemment oublié : les interactions humaines.</p>
                    <img src='/cdn.jpeg' className="h-72 rounded-sm m-auto mr-4"/>
                </div>
                <p className="mt-4 text-lg">Actuellement, Ganymède est à la recherche d'un organisme à but non-lucratif (OBNL) prêt à gérer ses fonds. Nous espérons pouvoir commencer nos activités de distribution à l'hiver 2024.</p>
            </div>



            <div className="w-5/6 m-auto mt-36">
                <h3 className="text-5xl mt-4 mb-2">Notre mission</h3>

                <hr className="border-[1.5px] border-black mb-8" />

                <div className="flex">
                    <ul className="text-xl list-disc ml-8 flex flex-col gap-8">
                        <li className="">
                            Lutter contre les dangers liés à la température et à l'exclusion sociale qui visent les personnes en situation d'itinérance, en :
                            <ul className="ml-4">
                                <li>- <span className="font-semibold">Distribuant quotidiennement</span> de l'eau, du café ou du bouillon;</li>
                                <li>- <span className="font-semibold">Engageant la conversation</span> avec les personnes servies.</li>
                            </ul>
                        </li>
                        <li>Offrir aux étudiants post-secondaires <span className="font-semibold">une opportunité de s'impliquer positivement</span> dans leur communauté d'étude.</li>
                    </ul>

                    <img src="src/assets/insideroom.png" alt="peopleinaroom" className="h-96 mr-4"/>
                </div>
            </div>
            
        
            
            
            <div className="w-5/6 m-auto mt-48 mb-80">
                <h3 className="text-5xl mt-4 mb-2 text-center mb-8">Comment puis-je aider ?</h3>
                <p className="text-xl"><span className="font-semibold">Ganymède n'accepte pas de dons en argent pour le moment.</span> Nous voulons en effet être sûr de gérer les dons de façon parfaitement appropriée, ce qui n'est pas possible tant que nous ne sommes pas intégrés à un OBNL. Toutefois, les individus et les entreprises peuvent aider Ganymède à atteindre ce premier objectif de plusieurs façons, par exemple en :</p>
                <ul className="text-xl ml-9 list-disc">
                    <li>Acceptant de faire de Ganymède un projet de votre OBNL;</li>
                    <li>Acceptant d'offrir des commandites au projet (entreprises) en envoyant un courriel à le.projet.ganymede@gmail.com ;</li>
                    <li>Signalant votre intérêt à rejoindre le projet à être de bénévole en remplissant le formulaire.</li>
                </ul>
            </div>
            
        </div>
    )
}

export default Info
