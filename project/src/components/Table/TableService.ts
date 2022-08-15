export const getAllContracts = async () => (
    await fetch('https://cft.mas3.co/api/v1/cft-definitions/list', {
        method: 'POST',
        mode: "no-cors",
    })
);

