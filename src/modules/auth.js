// La autentificacion no se usa firestore sino firebase
import firebase from 'firebase';

export default {
    state: {
        user: null,
        role: 'guest',
        logged: false
    },
    actions: {
        firebaseRegister: ({commit}, user) => {
            //commit('setUser', user);
            return firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(user.email, user.password);
        },
        firebaseLogin: ({commit}, user) => {
            //this.context.commit
            return firebase.auth().signInWithEmailAndPassword(user.mail, user.password)
        },
        firebaseLogout: () => {
            return firebase.auth().signOut();
        }
    },
    mutations: {
        setUser: (state, user) => {
            if(user) {
                state.user = {
                    uid: user.uid,
                    emial: user.email
                };
                state.logged = true;
            } else {
                state.user = null;
                state.logged = false;
            }
        },
        setRole: (state, role) => {
            state.role = role;
        }
    },
    getters: {
        logged: (state) => {
            //transforma null en booleano
            return !!state.user;
        },
        role: (state) => {
            return state.role;
        },
        isCustomer: (state) => {
            return state.role === 'customer';
        }
    }
}
