// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

import * as assert from 'assert';
import * as sinon from 'sinon';
import {SinonStub} from 'sinon';
import {describe, it} from 'mocha';
import {IamClient} from '../../src/iamService';
import * as protosTypes from '../../protos/iam_service';
import {GrpcClient, GrpcClientOptions} from '../../src/grpc';
import {GrpcClient as FallbackGrpcClient} from '../../src/fallback';

function stubSimpleCall<ResponseType>(response?: ResponseType, error?: Error) {
  return error
    ? sinon.stub().rejects(error)
    : sinon.stub().resolves([response]);
}

function stubSimpleCallWithCallback<ResponseType>(
  response?: ResponseType,
  error?: Error
) {
  return error
    ? sinon.stub().callsArgWith(2, error)
    : sinon.stub().callsArgWith(2, null, response);
}

describe('Iam service', () => {
  it('has servicePath', () => {
    const servicePath = IamClient.servicePath;
    assert(servicePath);
  });

  it('has apiEndpoint', () => {
    const apiEndpoint = IamClient.apiEndpoint;
    assert(apiEndpoint);
  });

  it('has port', () => {
    const port = IamClient.port;
    assert(port);
    assert(typeof port === 'number');
  });

  it('should create a client with no option', () => {
    const grpcClient = new GrpcClient();
    const grpcClientOptions = Object.assign({} as GrpcClientOptions);
    const client = new IamClient(grpcClient, grpcClientOptions);
    assert(client);
  });

  it('should create a client with gRPC fallback', () => {
    const grpcClient = new FallbackGrpcClient();
    const client = new IamClient(grpcClient, {fallback: true});
    assert(client);
  });

  it('has initialize method and supports deferred initialization', async () => {
    const grpcClient = new GrpcClient();
    const client = new IamClient(grpcClient, {
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    assert.strictEqual(client.iamPolicyStub, undefined);
    client.initialize();

    assert(client.iamPolicyStub);
  });

  it('has close method', () => {
    const grpcClient = new FallbackGrpcClient();
    const client = new IamClient(grpcClient, {
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.close();
  });

  it('has getProjectId method', async () => {
    const fakeProjectId = 'fake-project-id';
    const grpcClient = new GrpcClient();
    const client = new IamClient(grpcClient, {
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.initialize();
    client.getProjectId = sinon.stub().resolves(fakeProjectId);
    const result = await client.getProjectId();
    assert.strictEqual(result, fakeProjectId);
    assert((client.getProjectId as SinonStub).calledWithExactly());
  });

  it('has getProjectId method with callback', async () => {
    const fakeProjectId = 'fake-project-id';
    const grpcClient = new FallbackGrpcClient();

    const client = new IamClient(grpcClient, {
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.initialize();
    client.getProjectId = sinon.stub().callsArgWith(0, null, fakeProjectId);
    const promise = new Promise((resolve, reject) => {
      client.getProjectId((err?: Error | null, projectId?: string | null) => {
        if (err) {
          reject(err);
        } else {
          resolve(projectId);
        }
      });
    });
    const result = await promise;
    assert.strictEqual(result, fakeProjectId);
  });

  describe('getIamPolicy', () => {
    it('invokes getIamPolicy without error', async () => {
      const grpcClient = new GrpcClient();

      const client = new IamClient(grpcClient, {
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = {
        resource: '',
      } as protosTypes.google.iam.v1.GetIamPolicyRequest;
      const expectedHeaderRequestParams = 'resource=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = {} as protosTypes.google.iam.v1.Policy;

      client.innerApiCalls.getIamPolicy = stubSimpleCall(expectedResponse);
      const response = await client.getIamPolicy(request);
      assert.deepStrictEqual(response, [expectedResponse]);
      assert(
        (client.innerApiCalls.getIamPolicy as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes getIamPolicy without error using callback', async () => {
      const grpcClient = new GrpcClient();
      const client = new IamClient(grpcClient, {
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = {
        resource: '',
      } as protosTypes.google.iam.v1.GetIamPolicyRequest;
      const expectedHeaderRequestParams = 'resource=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = {} as protosTypes.google.iam.v1.Policy;
      client.innerApiCalls.getIamPolicy = stubSimpleCallWithCallback(
        expectedResponse
      );
      const promise = new Promise((resolve, reject) => {
        client.getIamPolicy(
          request,
          (
            err?: Error | null,
            result?: protosTypes.google.iam.v1.Policy | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.getIamPolicy as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes getIamPolicy with error', async () => {
      const grpcClient = new GrpcClient();

      const client = new IamClient(grpcClient, {
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = {
        resource: '',
      } as protosTypes.google.iam.v1.GetIamPolicyRequest;
      const expectedHeaderRequestParams = 'resource=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.getIamPolicy = stubSimpleCall(
        undefined,
        expectedError
      );
      assert.rejects(async () => {
        await client.getIamPolicy(request);
      }, expectedError);
      assert(
        (client.innerApiCalls.getIamPolicy as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });
  });
  describe('setIamPolicy', () => {
    it('invokes setIamPolicy without error', async () => {
      const grpcClient = new GrpcClient();

      const client = new IamClient(grpcClient, {
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = {
        resource: '',
      } as protosTypes.google.iam.v1.SetIamPolicyRequest;
      const expectedHeaderRequestParams = 'resource=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = {} as protosTypes.google.iam.v1.Policy;

      client.innerApiCalls.setIamPolicy = stubSimpleCall(expectedResponse);
      const response = await client.setIamPolicy(request);
      assert.deepStrictEqual(response, [expectedResponse]);
      assert(
        (client.innerApiCalls.setIamPolicy as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes setIamPolicy without error using callback', async () => {
      const grpcClient = new GrpcClient();
      const client = new IamClient(grpcClient, {
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = {
        resource: '',
      } as protosTypes.google.iam.v1.SetIamPolicyRequest;
      const expectedHeaderRequestParams = 'resource=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = {} as protosTypes.google.iam.v1.Policy;
      client.innerApiCalls.setIamPolicy = stubSimpleCallWithCallback(
        expectedResponse
      );
      const promise = new Promise((resolve, reject) => {
        client.setIamPolicy(
          request,
          (
            err?: Error | null,
            result?: protosTypes.google.iam.v1.Policy | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.setIamPolicy as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes setIamPolicy with error', async () => {
      const grpcClient = new GrpcClient();

      const client = new IamClient(grpcClient, {
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = {
        resource: '',
      } as protosTypes.google.iam.v1.SetIamPolicyRequest;
      const expectedHeaderRequestParams = 'resource=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.setIamPolicy = stubSimpleCall(
        undefined,
        expectedError
      );
      assert.rejects(async () => {
        await client.setIamPolicy(request);
      }, expectedError);
      assert(
        (client.innerApiCalls.setIamPolicy as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });
  });
  describe('TestIamPermissions', () => {
    // it('invokes TestIamPermissions without error', async () => {
    //   const grpcClient = new GrpcClient();

    //   const client = new IamClient(grpcClient, {
    //     credentials: {client_email: 'bogus', private_key: 'bogus'},
    //     projectId: 'bogus',
    //   });
    //   client.initialize();
    //   const request = {
    //     resource: '',
    //     permissions: [''],
    //   } as protosTypes.google.iam.v1.TestIamPermissionsRequest;
    //   const expectedHeaderRequestParams = 'resource=,permissions=';
    //   const expectedOptions = {
    //     otherArgs: {
    //       headers: {
    //         'x-goog-request-params': expectedHeaderRequestParams,
    //       },
    //     },
    //   };
    //   const expectedResponse = {permissions: ['']};

    //   client.innerApiCalls.TestIamPermissions = stubSimpleCall(
    //     expectedResponse
    //   );
    //   const response = await client.testIamPermissions(request);
    //   assert.deepStrictEqual(response, expectedResponse);
    //   assert(
    //     (client.innerApiCalls.testIamPermissions as SinonStub)
    //       .getCall(0)
    //       .calledWith(request, expectedOptions, undefined)
    //   );
    // });

    it('invokes TestIamPermissions without error using callback', async () => {
      const grpcClient = new GrpcClient();
      const client = new IamClient(grpcClient, {
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = {
        resource: '',
        permissions: [''],
      } as protosTypes.google.iam.v1.TestIamPermissionsRequest;
      const expectedHeaderRequestParams = 'resource=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = {
        permissions: [''],
      } as protosTypes.google.iam.v1.TestIamPermissionsResponse;
      client.innerApiCalls.testIamPermissions = stubSimpleCallWithCallback(
        expectedResponse
      );
      const promise = new Promise((resolve, reject) => {
        client.testIamPermissions(
          request,
          (
            err?: Error | null,
            result?: protosTypes.google.iam.v1.TestIamPermissionsResponse | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.testIamPermissions as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes TestIamPermissions with error', async () => {
      const grpcClient = new GrpcClient();

      const client = new IamClient(grpcClient, {
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = {
        resource: '',
        permissions: [''],
      } as protosTypes.google.iam.v1.TestIamPermissionsRequest;
      const expectedHeaderRequestParams = 'resource=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.testIamPermissions = stubSimpleCall(
        undefined,
        expectedError
      );
      assert.rejects(async () => {
        await client.testIamPermissions(request);
      }, expectedError);
      assert(
        (client.innerApiCalls.testIamPermissions as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });
  });
});
