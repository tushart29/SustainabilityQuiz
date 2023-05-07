import './HomePage.css';
//import Navbar from "./Navbar";

function Home() {
    return (
        <div>
            {/*<Navbar /> */}
            <h1 >Welcome to the Better Future website!</h1>
            <div className='div1'>
                <h2>
                    A Sustainability Quiz is a set of questions designed to help users identiy their behavior in order
                    to live more sustainabily. Additionally, it helps raise awareness and inspire individuals to take
                    actions themselves.
                    It presents users with a set of questions related to environmental conservation, social responsibility,
                    and economic viability, and based on their responses, provides them with an assessment of their
                    sustainability lifestyle.
                    The website can also provide personalized recommendations and tips on how to improve one's
                    sustainability practices in a form of todo-lists.
                    The overall goal of the website is to inspire and encourage people to adopt more sustainable habits and
                    contribute to a greener future.
                </h2>

                <a href='./Quiz.js'>HERE</a>
            </div>

            <div className='div2'>
                <h2>
                    Sustainability is crucial for protecting the environment, preserving biodiversity, reducing pollution, and combating climate change. It is also essential for promoting economic stability, reducing waste, and increasing profitability.
                    Additionally, sustainability is a key component of social responsibility, helping to ensure that our actions do not negatively impact future generations or vulnerable populations.
                    Sustainable practices can also promote health and well-being by creating safer and healthier living and working environments.
                    Overall, sustainability is vital for meeting our present needs without compromising the ability of future generations to meet their own needs.
                </h2>
            </div>


            <div className='div3'>
                <h2>
                    <ol>
                        <li> https://www.ecowatch.com/ </li>
                        <li> https://earth911.com/</li>
                        <li> https://www.un.org/sustainabledevelopment/</li>
                        <li> https://sustainablebrands.com/</li>
                        <li> https://www.greenbiz.com/</li>


                    </ol>
                </h2>
            </div>


        </div>
    );
}

export default Home;