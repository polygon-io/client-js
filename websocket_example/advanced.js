
const lodash = require('lodash')
const WebSocket = require('ws')
const EventEmitter = require('events').EventEmitter
const APIKEY = process.env.POLY_API_KEY || 'YOUR_API_KEY'


/*
	This example is similar to the basic example provided, however 
	in addition it offers reconnection logic, as well as an easier 
	way to process each type of messages. We can use the `subscribe`
	method at any time to subscribe to more channels..
 */


class Polygon extends EventEmitter {
	constructor( params ){
		super()
		console.log('Polygon class initialized..')
		this.ws = null
		this.subscriptions = []
		this.apiKey = params.apiKey
		this.connect()
	}
	subscribe( channels ){
		// Add to our list of subscriptions:
		this.subscriptions.push( channels )
		this.subscriptions = lodash.flatten( this.subscriptions )
		// If these are additional subscriptions, only send the new ones:
		if( this.connected ) this.sendSubscriptions( channels )
	}
	connect(){
		this.connected = false
		this.ws = new WebSocket('wss://socket.polygon.io/crypto')
		this.ws.on('open', this.onOpen.bind( this ))
		this.ws.on('close', this.onDisconnect.bind( this ))
		this.ws.on('disconnect', this.onDisconnect.bind( this ))
		this.ws.on('error', this.onError.bind( this ))
		this.ws.on('message', this.onMessage.bind( this ))
	}
	onOpen(){
		// Authenticate:
		this.ws.send(`{"action":"auth","params":"${APIKEY}"}`)
		this.connected = true
		// Subscribe to Crypto Trades and SIP:
		this.sendSubscriptions( this.subscriptions )
	}
	sendSubscriptions( subscriptions ){
		this.ws.send(`{"action":"subscribe","params":"${subscriptions.join(',')}"}`)
	}
	onDisconnect(){
		setTimeout( this.connect.bind( this ), 2000 )
	}
	onError( e ){
		console.log('Error:', e)
	}
	onMessage( data ){
		data = JSON.parse( data )
		data.forEach(( msg ) => {
			if( msg.ev === 'status' ){
				console.log('Status Update:', msg.message)
			}
			this.emit(msg.ev, msg)
		})
	}
}



// Use our Polygon Class:
const client = new Polygon({ apiKey: APIKEY })

// Subscribe to trades:
client.subscribe([ 'XT.*' ])

// Wait 5sec, then subscribe to SIP:
setTimeout(() => {
	client.subscribe(['XS.*'])
}, 5000)

// When we receive a crypto trade:
client.on('XT', ( trade ) => {
	console.log('Trade:', trade)
})

// When we receive a crypto quote:
client.on('XS', ( quote ) => {
	console.log('Quote:', quote)
})

