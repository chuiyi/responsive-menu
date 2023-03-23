import React from 'react';
import { TonicProvider, Flex, MenuDivider, MenuItem, Icon, Text } from '@tonic-ui/react';

function ResponsiveMenu() {
    return (
        <TonicProvider
            colorMode={{
                defaultValue: 'dark', // One of: 'dark', 'light'
            }}
        >
            <Flex display="inline-flex" flexDirection="column" position="fixed" marginTop="8x" bgColor="gray:90">
                <MenuItem value="settings">
                    <Icon icon="settings" mr="2x" />
                    <Text>Settings</Text>
                </MenuItem>
                <MenuItem value="accounts">
                    <Icon icon="user-team" mr="2x" />
                    <Text>Accounts</Text>
                </MenuItem>
                <MenuItem value="privacy-control">
                    <Icon icon="lock" mr="2x" />
                    <Text>Privacy control</Text>
                </MenuItem>
                <MenuDivider />
                <MenuItem disabled value="restore-defaults">
                    <Icon icon="undo" mr="2x" />
                    <Text>Restore Defaults</Text>
                </MenuItem>
            </Flex>
        </TonicProvider>
    );
}

export default ResponsiveMenu;
