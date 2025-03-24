import React from 'react'

export const helpSelect = () => {

    const renderOption = {
        cityRender: (data) => {
            if (!data) return [];
            const options = data.map((item) => ({
                id: item.idCiudad,
                name: item.name,
            }));
            return options;
        },
    };

    const renderAngency = {
        agencyRender: (data) => {
            if (!data) return [];
            const options = data.map((item) => ({
                id: item.idAgencia,
                name: item.name,
            }));
            return options;
        },
    };
    return {
        renderOption,
        renderAngency
    }
}
