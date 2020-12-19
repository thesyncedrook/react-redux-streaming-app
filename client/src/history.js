import { createBrowserHistory } from 'history'; 

export default createBrowserHistory(); // This is a custom history object which we created for the sake of making progmatic navigation 
                                        // simpler and this object is passed to a plain router instead of browser router which creates its own history object