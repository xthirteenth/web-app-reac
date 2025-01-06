import { Link } from 'react-router-dom';
import { Button } from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"
import ChatIcon from "@mui/icons-material/Chat"
import AccountBoxIcon from '@mui/icons-material/AccountBox';

export const Navigation = () => {
  return (
    <div className="navigation-bar">
      <div className="navigation-buttons">
        <NavigationButton to="/home" icon={<HomeIcon />} />
        <NavigationButton to="/profile" icon={<AccountBoxIcon />} />
        <NavigationButton to="/selection" icon={<ChatIcon />} />
      </div>
    </div>
  );
};

type NavigationButtonProps = {
  to: string;
  icon: React.ReactNode;
};

const NavigationButton = ({ to, icon }: NavigationButtonProps) => (
  <Button 
    component={Link}
    to={to}
    variant="text"
    className="button-all"
  >
    <span className="button-all-text-color">
      {icon}
    </span>
  </Button>
);