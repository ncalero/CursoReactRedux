//El argumento 'state' de esta función no es el estado de la aplicación
//Únicamente esta función es la responsable de el
export default function(state = null, action){
    switch (action.type){
        case 'BOOK_SELECTED':
            return action.payload;
    }
    return state;
}