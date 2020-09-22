package my.company;

import java.util.ArrayList;
import java.util.List;

import com.sap.cloud.sdk.cloudplatform.logging.CloudLoggerFactory;
import com.sap.cloud.sdk.service.prov.api.*;
import com.sap.cloud.sdk.service.prov.api.annotations.*;
import com.sap.cloud.sdk.service.prov.api.exits.*;
import com.sap.cloud.sdk.service.prov.api.request.*;
import com.sap.cloud.sdk.service.prov.api.response.*;
import com.sap.cloud.sdk.service.prov.api.operations.Query;
import com.sap.cloud.sdk.service.prov.api.operations.Read;
import org.slf4j.*;

public class OrdersService {

    private static final Logger LOG = CloudLoggerFactory.getLogger(OrdersService.class.getName());

    @BeforeRead(entity = "Orders", serviceName = "CatalogService")
    public BeforeReadResponse beforeReadOrders(ReadRequest req, ExtensionHelper h) {
        LOG.error("##### Orders - beforeReadOrders ########");
        return BeforeReadResponse.setSuccess().response();
    }
    
    @AfterRead(entity = "Employee", serviceName = "CatalogService")
	public ReadResponse getEmployee(ReadRequest req, ReadResponseAccessor res, ExtensionHelper h) {

		ReadResponse readResponse = null;
		
		 System.out.print("AfterRead"); 

		try {

		} catch (Exception e) {

			ErrorResponse errorResponse = ErrorResponse.getBuilder()
					.setMessage("There is an error.  Check the logs for the details.").setStatusCode(500).setCause(e)
					.response();
			readResponse = ReadResponse.setError(errorResponse);
		}
		return readResponse;
	}
	
	@AfterQuery(entity = "Employee", serviceName = "CatalogService")
	public QueryResponse afterEmployee(QueryRequest req, QueryResponseAccessor res, ExtensionHelper h) {
		
		System.out.print("AfterQuery"); 
		
		List<EntityData> dataList = res.getEntityDataList(); // original list
        List<EntityData> modifiedList = new ArrayList<EntityData>(dataList.size()); // modified list
        for (EntityData ed : dataList) {
            EntityData ex = EntityData.getBuilder(ed).addElement("amount", 1000).buildEntityData("Orders");
            modifiedList.add(ex);
        }
		return QueryResponse.setSuccess().setData(modifiedList).response();

	}

    @AfterRead(entity = "Orders", serviceName = "CatalogService")
    public ReadResponse afterReadOrders(ReadRequest req, ReadResponseAccessor res, ExtensionHelper h) {
        EntityData ed = res.getEntityData();
        EntityData ex = EntityData.getBuilder(ed).addElement("amount", 1000).buildEntityData("Orders");
        return ReadResponse.setSuccess().setData(ex).response();
    }

    @AfterQuery(entity = "Orders", serviceName = "CatalogService")
    public QueryResponse afterQueryOrders(QueryRequest req, QueryResponseAccessor res, ExtensionHelper h) {
        List<EntityData> dataList = res.getEntityDataList(); // original list
        List<EntityData> modifiedList = new ArrayList<EntityData>(dataList.size()); // modified list
        for (EntityData ed : dataList) {
            EntityData ex = EntityData.getBuilder(ed).addElement("amount", 1000).buildEntityData("Orders");
            modifiedList.add(ex);
        }
        return QueryResponse.setSuccess().setData(modifiedList).response();
    }
}