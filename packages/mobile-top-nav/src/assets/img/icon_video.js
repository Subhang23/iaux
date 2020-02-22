import { html, LitElement } from 'lit-element';
import Icon from './icon';

class IconVideo extends Icon {
  render() {
    return html`
      <svg height="40" viewBox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg" aria-labelledby="videoTitleID videoDescID">
        <title id="videoTitleID">Video icon</title>
        <desc id="videoDescID">An illustration of two cells of a film strip.</desc>
        <path d="m22.9570963 4.06779661c0 .40677966-.2816822.6779661-.7042054.6779661h-1.2675698c-.4225232 0-.7042054-.27118644-.7042054-.6779661v-.6779661c0-.40677966.2816822-.6779661.7042054-.6779661h1.2675698c.4225232 0 .7042054.27118644.7042054.6779661zm0 3.25423729c0 .40677966-.2816822.6779661-.7042054.6779661h-1.2675698c-.4225232 0-.7042054-.27118644-.7042054-.6779661v-.6779661c0-.40677966.2816822-.67796611.7042054-.67796611h1.2675698c.4225232 0 .7042054.27118645.7042054.67796611zm0 3.2542373c0 .4067796-.2816822.6779661-.7042054.6779661h-1.2675698c-.4225232 0-.7042054-.2711865-.7042054-.6779661v-.67796612c0-.40677966.2816822-.6779661.7042054-.6779661h1.2675698c.4225232 0 .7042054.27118644.7042054.6779661zm0 3.3898305c0 .4067797-.2816822.6779661-.7042054.6779661h-1.2675698c-.4225232 0-.7042054-.2711864-.7042054-.6779661v-.6779661c0-.4067797.2816822-.6779661.7042054-.6779661h1.2675698c.4225232 0 .7042054.2711864.7042054.6779661zm0 3.2542373c0 .4067796-.2816822.6779661-.7042054.6779661h-1.2675698c-.4225232 0-.7042054-.2711865-.7042054-.6779661v-.6779661c0-.4067797.2816822-.6779661.7042054-.6779661h1.2675698c.4225232 0 .7042054.2711864.7042054.6779661zm0 3.2542373c0 .4067796-.2816822.6779661-.7042054.6779661h-1.2675698c-.4225232 0-.7042054-.2711865-.7042054-.6779661v-.6779661c0-.4067797.2816822-.6779661.7042054-.6779661h1.2675698c.4225232 0 .7042054.2711864.7042054.6779661zm-4.0843914-10.440678c0 .5423729-.4225232.9491525-.9858875.9491525h-11.54896873c-.56336433 0-.98588757-.4067796-.98588757-.9491525v-6.91525423c0-.54237288.42252324-.94915254.98588757-.94915254h11.54896873c.5633643 0 .9858875.40677966.9858875.94915254zm-.1408411 11.2542373c0 .5423729-.4225232.9491525-.9858875.9491525h-11.54896871c-.56336433 0-.98588757-.4067796-.98588757-.9491525v-6.9152542c0-.5423729.42252324-.9491526.98588757-.9491526h11.54896871c.5633643 0 .9858875.4067797.9858875.9491526zm-14.9291546-17.22033899c0 .40677966-.28168216.6779661-.70420541.6779661h-1.26756973c-.42252324 0-.70420541-.27118644-.70420541-.6779661v-.6779661c0-.40677966.28168217-.6779661.70420541-.6779661h1.26756973c.42252325 0 .70420541.27118644.70420541.6779661zm0 3.25423729c0 .40677966-.28168216.6779661-.70420541.6779661h-1.26756973c-.42252324 0-.70420541-.27118644-.70420541-.6779661v-.6779661c0-.40677966.28168217-.67796611.70420541-.67796611h1.26756973c.42252325 0 .70420541.27118645.70420541.67796611zm0 3.2542373c0 .4067796-.28168216.6779661-.70420541.6779661h-1.26756973c-.42252324 0-.70420541-.2711865-.70420541-.6779661v-.67796612c0-.40677966.28168217-.6779661.70420541-.6779661h1.26756973c.42252325 0 .70420541.27118644.70420541.6779661zm0 3.3898305c0 .4067797-.28168216.6779661-.70420541.6779661h-1.26756973c-.42252324 0-.70420541-.2711864-.70420541-.6779661v-.6779661c0-.4067797.28168217-.6779661.70420541-.6779661h1.26756973c.42252325 0 .70420541.2711864.70420541.6779661zm0 3.2542373c0 .4067796-.28168216.6779661-.70420541.6779661h-1.26756973c-.42252324 0-.70420541-.2711865-.70420541-.6779661v-.6779661c0-.4067797.28168217-.6779661.70420541-.6779661h1.26756973c.42252325 0 .70420541.2711864.70420541.6779661zm0 3.2542373c0 .4067796-.28168216.6779661-.70420541.6779661h-1.26756973c-.42252324 0-.70420541-.2711865-.70420541-.6779661v-.6779661c0-.4067797.28168217-.6779661.70420541-.6779661h1.26756973c.42252325 0 .70420541.2711864.70420541.6779661zm19.9994336-20.4745763h-.8450465v.27118644.6779661c0 .40677966-.2816822.6779661-.7042054.6779661h-1.2675698c-.4225232 0-.7042054-.27118644-.7042054-.6779661v-.6779661-.27118644h-16.4784065v.27118644.6779661c0 .40677966-.28168216.6779661-.70420541.6779661h-1.26756973c-.42252324 0-.70420541-.27118644-.70420541-.6779661v-.6779661-.27118644h-1.12672865v24h1.12672865v-.2711864-.6779661c0-.4067797.28168217-.6779661.70420541-.6779661h1.26756973c.42252325 0 .70420541.2711864.70420541.6779661v.6779661.2711864h16.6192476v-.2711864-.6779661c0-.4067797.2816822-.6779661.7042054-.6779661h1.2675698c.4225232 0 .7042054.2711864.7042054.6779661v.6779661.2711864h.8450465v-24z" fill="${this.fill}" fill-rule="evenodd" transform="translate(8 8)"/>
      </svg>
    `;
  }
}

customElements.define('icon-video', IconVideo);
