import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import './Sidebar.scss';
import tags from 'tags';
import Tags, { TAG_TYPES } from 'components/Tags/Tags';
import { SidebarContextConsumer } from 'components/Context/SiderbarContext';

class Sidebar extends React.Component {
    render(

    ) {
        // const { onClose } = this.props
        return (
            <SidebarContextConsumer>
                {
                    ({SidebarVisible, closeSidebar}) => (
                        SidebarVisible &&
                        <div>
                            <div className='sidebar'>
                                <FontAwesomeIcon className="x" icon={faTimes} onClick={closeSidebar} />
                                <p>Etiquetas</p>
                                {
                                    tags.map(tag => <Tags
                                        key={tag.id}
                                        name={tag.name}
                                        color={tag.color}
                                        type={TAG_TYPES.BIG}
                                    />)
                                }
                            </div>
                        </div>
                    )
                }
            </SidebarContextConsumer>
        )
    }
}

export default Sidebar;

