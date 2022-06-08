import Report from "../schemas/report.schemas";

interface IcreateReportServiceRequest {
  service?: string,
  description?: string,
  name?: string,
  id?: any,

}

export default new class createReportService {
  async execute({ service, description, name, id }: IcreateReportServiceRequest) {
    const data = {service, description, name, id};

    const result = await Report.create(data);

    return result;
  }
}