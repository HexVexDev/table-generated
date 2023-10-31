import {SiteSelectionReport} from './siteSelectionReport.ts';

export class Draft {
  public _id: String;
  public name: String;
  public siteSelectionReport: SiteSelectionReport = new SiteSelectionReport();
}
