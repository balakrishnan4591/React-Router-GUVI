import { Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="row" id="sidebar">
      <Menu className="sidebar-menu">
        <MenuItem className="sidebar-menu-item" component={<Link to="/" />}>
          Trending Articles
        </MenuItem>
        <MenuItem
          className="sidebar-menu-item"
          component={<Link to="/ai-ml" />}
        >
          AI - ML
        </MenuItem>
        <MenuItem
          className="sidebar-menu-item"
          component={<Link to="/blockchain" />}
        >
          Blockchain
        </MenuItem>
        <MenuItem
          className="sidebar-menu-item"
          component={<Link to="/cloud-computing" />}
        >
          Cloud Computing
        </MenuItem>
        <MenuItem
          className="sidebar-menu-item"
          component={<Link to="/cyber-security" />}
        >
          Cyber Security
        </MenuItem>
        <MenuItem
          className="sidebar-menu-item"
          component={<Link to="/data-science" />}
        >
          Data Science
        </MenuItem>
        <MenuItem
          className="sidebar-menu-item"
          component={<Link to="/devops" />}
        >
          DevOps
        </MenuItem>
        <MenuItem
          className="sidebar-menu-item"
          component={<Link to="/data-marketing" />}
        >
          Data Marketing
        </MenuItem>
        <MenuItem
          className="sidebar-menu-item"
          component={<Link to="/full-stack-development" />}
        >
          Full Stact Development
        </MenuItem>
        <MenuItem
          className="sidebar-menu-item"
          component={<Link to="/software-automation-testing" />}
        >
          Software Automation & Testing
        </MenuItem>
        <MenuItem
          className="sidebar-menu-item"
          component={<Link to="/ui-ux-designing" />}
        >
          UI/UX Designing
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Sidebar;
