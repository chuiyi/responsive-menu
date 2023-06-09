import React, { useState } from 'react';
import { Flex, Button, Icon, TonicProvider } from '@tonic-ui/react';
import Layout from './Component/Layout';
import ResponsiveMenu from './Component/ResponsiveMenu';
import './App.css';

const App = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <TonicProvider
            colorMode={{
                defaultValue: 'dark', // One of: 'dark', 'light'
            }}
            // colorStyle={{
            //     defaultValue: colorStyle, // Custom color style
            // }}
            useCSSBaseline={true} // If `true`, apply CSS reset and base styles
        >
            <Layout>
                <Flex display="inline-flex" direction="column" rowGap="4x" marginTop="16x">
                    <Button onClick={toggleMenu} variant="ghost" width="8x" height="8x" bgColor="gray:90" borderRadius="circle">
                        <Icon icon="user-team" />
                    </Button>
                    {menuOpen && <ResponsiveMenu />}
                </Flex>
            </Layout>
        </TonicProvider>
    );
};

export default App;
