import React from 'react'
import { Edit, SimpleForm, TextInput } from 'react-admin'


const UserCreate = (props) => {
        return (
            <Edit title='Edit post' {...props}>
                <SimpleForm>
                    <TextInput disabled source='id' />
                    <TextInput  source='name' />
                    <TextInput  source='email' />
                </SimpleForm>
            </Edit>
        )
    }

    export default UserCreate
