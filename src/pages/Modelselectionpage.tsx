import { Link } from 'react-router-dom';
import { Button } from "@mui/material"
import "./pages.css/Modelselect.css";

const Selection = () => {
    return (
        <div className="min-h-screen main">
            <div className="centered-container">
                <div className="models-container">
                    <Button 
                        component={Link} 
                        to="/chat" 
                        variant="text" 
                        className="model-button"
                    >
                        <span className="gpt-4-text">GPT-4 / DALLE</span>
                    </Button>

                    <Button 
                        component={Link} 
                        to="/chat-2" 
                        variant="text" 
                        className="model-button"
                    >
                        <span className="sonnet-text">3.5 Sonnet</span>
                    </Button>

                    <Button 
                        component={Link} 
                        to="/chat-3" 
                        variant="text" 
                        className="model-button"
                    >
                        <span className="midjourney-text">Midjourney</span>
                    </Button>

                    <Button 
                        component={Link} 
                        to="/chat-4" 
                        variant="text" 
                        className="model-button"
                    >
                        <span className="gemini-text">Gemini</span>
                    </Button>
                </div>

                <Button 
                    component={Link} 
                    to="/subscription" 
                    variant="text" 
                    className="model-button subscription-btn"
                >
                    <span className="subscription-text">Subscription</span>
                </Button>
            </div>
        </div>
    );
};

export {Selection}