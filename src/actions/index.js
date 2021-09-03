export const latestRoster = (team, idposition) => {
    const request = fetch(`http://localhost:2000/${team}?position.id=${idposition}`, {method: 'get'})
        .then(response => response.json())
  
    return{
      type: 'GET_ROSTER',
      payload: request
    }
  }
  
  export function clearRoster(){
      return({
        type: 'CLEAR_ROSTER',
        payload: []
      })
  }