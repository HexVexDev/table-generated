import {Client} from './client.ts';
import {Assumption} from './assumption.ts';
import {Must} from './must.ts';
import {Want} from './want.ts';

export class SiteSelectionReport {
  public client: Client;
  public assumption: Assumption = new Assumption();
  public must: Must = new Must();
  public want: Want = new Want();
}
