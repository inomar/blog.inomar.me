import App from 'next/app';
import Router from 'next/router';
import withGA from 'next-ga';

export default withGA('UA-93818826-2', Router)(App);