import './HomePage.css';
import { Button } from '@mui/material';

function Home() {
    return (

        <div className='webpage'>
            <div className='yellow'>
                <h1 >Welcome to the Better Future website!</h1>
            </div>
            <div className='webpage'>
                <div className='div1'>
                    <h2>
                        A Sustainability Quiz is a set of questions designed to help users identiy their behavior in order
                        to live more sustainabily. Additionally, it helps raise awareness and inspire individuals to take
                        actions themselves.
                        It presents users with a set of questions related to environmental conservation, social responsibility,
                        and economic viability, and based on their responses, provides them with an assessment of their
                        sustainability lifestyle. After the series of questions, you will be given a sustainability score.
                        When your score is high, then this indicates you are making a positive contribution to sustainability,
                        While a low score suggests that there is room for improvement in certain areas.
                        The website can also provide personalized recommendations and tips on how to improve one's
                        sustainability practices in a form of todo-lists.
                        The overall goal of the website is to inspire and encourage people to adopt more sustainable habits and
                        contribute to a greener future.
                    </h2>

                    {/* <Button variant="contained">Click here for the quiz</Button> */}

                    {/* <a href='/quiz'>HERE</a> */}
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
                    <h2> Here are some useful links if you want to be more sustainable:
                        <ol>
                            <li> <a href="https://www.ecowatch.com/" target="_blank" rel="noopener noreferrer"> Eco watch</a> </li>
                            <li> <a href="https://earth911.com/" target="_blank" rel="noopener noreferrer">Earth 911</a></li>
                            <li> <a href="https://www.un.org/sustainabledevelopment/" target="_blank" rel="noopener noreferrer">UN's sustainability page</a></li>
                            <li> <a href="https://sustainablebrands.com/" target="_blank" rel="noopener noreferrer">Brands that are sustainable</a></li>
                            <li> <a href="https://www.greenbiz.com/" target="_blank" rel="noopener noreferrer">Sustainability blogs</a></li>


                        </ol>
                    </h2>
                </div>

                <div className='footer'>
                    <div className='div5'>
                        <h3> Made by:
                            <ul>
                                <li>Padmanabh Patil</li>
                                <li>Joshua</li>
                                <li>Tushar Thonupunoori</li>
                            </ul>
                        </h3>
                    </div>
                    <div className='div6'>

                    </div>


                </div>
            </div>
        </div>
    );
}

export default Home;