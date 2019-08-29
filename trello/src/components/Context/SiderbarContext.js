import React from 'react';

const SidebarContext = React.createContext()

class SidebarContextProvider extends React.Component{
    state = {
        SidebarVisible: false
    }
    openSidebar = () => {
        this.setState({ SidebarVisible: true})
    }
    closeSidebar = () => {
        this.setState({ SidebarVisible: false})
    }
    render(){
        return(
            <SidebarContext.Provider
                value={{
                    SidebarVisible: this.state.SidebarVisible,
                    openSidebar: this.openSidebar,
                    closeSidebar:this.closeSidebar
                }}>
                {this.props.children}
            </SidebarContext.Provider>
        )
    }
} 
export const SidebarContextConsumer = SidebarContext.Consumer
export default SidebarContextProvider