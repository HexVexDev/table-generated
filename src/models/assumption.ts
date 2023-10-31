export class Assumption {
  public building: Building = new Building();
  public land: Land = new Land();
  public utilities: Utilities = new Utilities();
  public logistics: Logistics = new Logistics();
  public headcount: Headcount = new Headcount();
  public environmentalImpacts: any[] = [
    {checked: false, value: "ISO-9001"},
    {checked: false, value: "ISO 14001-2015"},
    {checked: false, value: "IATF"},
    {checked: false, value: "CTPAT-OEA"},
    {checked: false, value: ""},
  ];
}

export class Building {
  public buildingName: String = "";
  public sizeType: String = "sqft";
  public sizeValue: String = "";
  public requirements: any[] = [
    {checked: false, value: "A/C"},
    {checked: false, value: "crane"},
    {checked: false, value: "wasteWater"},
    {checked: false, value: "warehouseSpace"},
    {checked: false, value: ""},
  ];
}

export class Land {
  public typeLand: String = "";
  public sizeType: String = "sqft";
  public sizeValue: String = "";
  public comment: String = "";
}

export class Utilities {
  public electricityInstalled: String = "";
  public electricityConsumed: String = "";
  public gas: String = "";
  public water: String = "";
}

export class Logistics {
  public trucksPerMonth: number = 0;
  public otherLogisticConsiderations: String = "";
  public handlingEquipment: String = "";
  public logisticsInbound: LogisticsInbound = new LogisticsInbound();
  public logisticsOutbound: LogisticsOutbound = new LogisticsOutbound();
}

export class LogisticsInbound {
  public originSeaPort: String = "";
  public destinationSeaPort: String = "";
  public containersPerMonth: number = 0;
}

export class LogisticsOutbound {
  public borderCity: String = "";
  public finalDestination: String = "";
}

export class Headcount {
  public directs: HeadcountOptions[] = [new HeadcountOptions()];
  public indirects: HeadcountOptions[] = [new HeadcountOptions()];
  public corporates: HeadcountOptions[] = [new HeadcountOptions()];
  public exchangeRate: String = "";
  public additionalComments: String = "";
}

export class HeadcountOptions {
  public quantity: number = 1;
  public role: String = "";
}
