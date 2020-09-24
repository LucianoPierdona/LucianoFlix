import React from 'react';
import Button from '../../components/Button';
import {Button404, Page} from './styles';

function Error() {
    return (
        <Page>
            Error 404, click
            <Button as='a' href="/">
                <Button404>
                    Here
                </Button404>
            </Button>
            to go back
        </Page>
    )
}

export default Error;