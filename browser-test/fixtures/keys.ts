// Manually created JSON object using the command:
// mkdir pbjs-genfiles && npx pbjs -p protos 
// -p node_modules/google-gax/protos -t json -o pbjs-genfiles/echo-protos.json 
// protos/google/cloud/language/v1/echo.proto //(HAS TO BE CHANGED TO RIGHT FOLDER)

export const echoProtoJson = {
  "nested": {
    "google": {
      "nested": {
        "showcase": {
          "nested": {
            "v1beta1": {
              "options": {
                "go_package": "github.com/googleapis/gapic-showcase/server/genproto",
                "java_package": "com.google.showcase.v1beta1",
                "java_multiple_files": true
              },
              "nested": {
                "Echo": {
                  "options": {
                    "(google.api.default_host)": "localhost:7469"
                  },
                  "methods": {
                    "Echo": {
                      "requestType": "EchoRequest",
                      "responseType": "EchoResponse",
                      "options": {
                        "(google.api.http).post": "/v1beta1/echo:echo",
                        "(google.api.http).body": "*"
                      }
                    },
                    "Expand": {
                      "requestType": "ExpandRequest",
                      "responseType": "EchoResponse",
                      "responseStream": true,
                      "options": {
                        "(google.api.http).post": "/v1beta1/echo:expand",
                        "(google.api.http).body": "*",
                        "(google.api.method_signature)": "content,error"
                      }
                    },
                    "Collect": {
                      "requestType": "EchoRequest",
                      "requestStream": true,
                      "responseType": "EchoResponse",
                      "options": {
                        "(google.api.http).post": "/v1beta1/echo:collect",
                        "(google.api.http).body": "*"
                      }
                    },
                    "Chat": {
                      "requestType": "EchoRequest",
                      "requestStream": true,
                      "responseType": "EchoResponse",
                      "responseStream": true
                    },
                    "PagedExpand": {
                      "requestType": "PagedExpandRequest",
                      "responseType": "PagedExpandResponse",
                      "options": {
                        "(google.api.http).post": "/v1beta1/echo:pagedExpand",
                        "(google.api.http).body": "*"
                      }
                    },
                    "Wait": {
                      "requestType": "WaitRequest",
                      "responseType": "google.longrunning.Operation",
                      "options": {
                        "(google.api.http).post": "/v1beta1/echo:wait",
                        "(google.api.http).body": "*",
                        "(google.longrunning.operation_info).response_type": "WaitResponse",
                        "(google.longrunning.operation_info).metadata_type": "WaitMetadata"
                      }
                    }
                  }
                },
                "EchoRequest": {
                  "oneofs": {
                    "response": {
                      "oneof": [
                        "content",
                        "error"
                      ]
                    }
                  },
                  "fields": {
                    "content": {
                      "type": "string",
                      "id": 1
                    },
                    "error": {
                      "type": "google.rpc.Status",
                      "id": 2
                    }
                  }
                },
                "EchoResponse": {
                  "fields": {
                    "content": {
                      "type": "string",
                      "id": 1
                    }
                  }
                },
                "ExpandRequest": {
                  "fields": {
                    "content": {
                      "type": "string",
                      "id": 1
                    },
                    "error": {
                      "type": "google.rpc.Status",
                      "id": 2
                    }
                  }
                },
                "PagedExpandRequest": {
                  "fields": {
                    "content": {
                      "type": "string",
                      "id": 1,
                      "options": {
                        "(google.api.field_behavior)": "REQUIRED"
                      }
                    },
                    "pageSize": {
                      "type": "int32",
                      "id": 2
                    },
                    "pageToken": {
                      "type": "string",
                      "id": 3
                    }
                  }
                },
                "PagedExpandResponse": {
                  "fields": {
                    "responses": {
                      "rule": "repeated",
                      "type": "EchoResponse",
                      "id": 1
                    },
                    "nextPageToken": {
                      "type": "string",
                      "id": 2
                    }
                  }
                },
                "WaitRequest": {
                  "oneofs": {
                    "end": {
                      "oneof": [
                        "endTime",
                        "ttl"
                      ]
                    },
                    "response": {
                      "oneof": [
                        "error",
                        "success"
                      ]
                    }
                  },
                  "fields": {
                    "endTime": {
                      "type": "google.protobuf.Timestamp",
                      "id": 1
                    },
                    "ttl": {
                      "type": "google.protobuf.Duration",
                      "id": 4
                    },
                    "error": {
                      "type": "google.rpc.Status",
                      "id": 2
                    },
                    "success": {
                      "type": "WaitResponse",
                      "id": 3
                    }
                  }
                },
                "WaitResponse": {
                  "fields": {
                    "content": {
                      "type": "string",
                      "id": 1
                    }
                  }
                },
                "WaitMetadata": {
                  "fields": {
                    "endTime": {
                      "type": "google.protobuf.Timestamp",
                      "id": 1
                    }
                  }
                }
              }
            }
          }
        },
        "api": {
          "options": {
            "go_package": "google.golang.org/genproto/googleapis/api/annotations;annotations",
            "java_multiple_files": true,
            "java_outer_classname": "FieldBehaviorProto",
            "java_package": "com.google.api",
            "objc_class_prefix": "GAPI",
            "cc_enable_arenas": true
          },
          "nested": {
            "http": {
              "type": "HttpRule",
              "id": 72295728,
              "extend": "google.protobuf.MethodOptions"
            },
            "Http": {
              "fields": {
                "rules": {
                  "rule": "repeated",
                  "type": "HttpRule",
                  "id": 1
                },
                "fullyDecodeReservedExpansion": {
                  "type": "bool",
                  "id": 2
                }
              }
            },
            "HttpRule": {
              "oneofs": {
                "pattern": {
                  "oneof": [
                    "get",
                    "put",
                    "post",
                    "delete",
                    "patch",
                    "custom"
                  ]
                }
              },
              "fields": {
                "selector": {
                  "type": "string",
                  "id": 1
                },
                "get": {
                  "type": "string",
                  "id": 2
                },
                "put": {
                  "type": "string",
                  "id": 3
                },
                "post": {
                  "type": "string",
                  "id": 4
                },
                "delete": {
                  "type": "string",
                  "id": 5
                },
                "patch": {
                  "type": "string",
                  "id": 6
                },
                "custom": {
                  "type": "CustomHttpPattern",
                  "id": 8
                },
                "body": {
                  "type": "string",
                  "id": 7
                },
                "responseBody": {
                  "type": "string",
                  "id": 12
                },
                "additionalBindings": {
                  "rule": "repeated",
                  "type": "HttpRule",
                  "id": 11
                }
              }
            },
            "CustomHttpPattern": {
              "fields": {
                "kind": {
                  "type": "string",
                  "id": 1
                },
                "path": {
                  "type": "string",
                  "id": 2
                }
              }
            },
            "methodSignature": {
              "rule": "repeated",
              "type": "string",
              "id": 1051,
              "extend": "google.protobuf.MethodOptions"
            },
            "defaultHost": {
              "type": "string",
              "id": 1049,
              "extend": "google.protobuf.ServiceOptions"
            },
            "oauthScopes": {
              "type": "string",
              "id": 1050,
              "extend": "google.protobuf.ServiceOptions"
            },
            "fieldBehavior": {
              "rule": "repeated",
              "type": "google.api.FieldBehavior",
              "id": 1052,
              "extend": "google.protobuf.FieldOptions"
            },
            "FieldBehavior": {
              "values": {
                "FIELD_BEHAVIOR_UNSPECIFIED": 0,
                "OPTIONAL": 1,
                "REQUIRED": 2,
                "OUTPUT_ONLY": 3,
                "INPUT_ONLY": 4,
                "IMMUTABLE": 5
              }
            }
          }
        },
        "protobuf": {
          "options": {
            "go_package": "github.com/golang/protobuf/protoc-gen-go/descriptor;descriptor",
            "java_package": "com.google.protobuf",
            "java_outer_classname": "DescriptorProtos",
            "csharp_namespace": "Google.Protobuf.Reflection",
            "objc_class_prefix": "GPB",
            "cc_enable_arenas": true,
            "optimize_for": "SPEED"
          },
          "nested": {
            "FileDescriptorSet": {
              "fields": {
                "file": {
                  "rule": "repeated",
                  "type": "FileDescriptorProto",
                  "id": 1
                }
              }
            },
            "FileDescriptorProto": {
              "fields": {
                "name": {
                  "type": "string",
                  "id": 1
                },
                "package": {
                  "type": "string",
                  "id": 2
                },
                "dependency": {
                  "rule": "repeated",
                  "type": "string",
                  "id": 3
                },
                "publicDependency": {
                  "rule": "repeated",
                  "type": "int32",
                  "id": 10,
                  "options": {
                    "packed": false
                  }
                },
                "weakDependency": {
                  "rule": "repeated",
                  "type": "int32",
                  "id": 11,
                  "options": {
                    "packed": false
                  }
                },
                "messageType": {
                  "rule": "repeated",
                  "type": "DescriptorProto",
                  "id": 4
                },
                "enumType": {
                  "rule": "repeated",
                  "type": "EnumDescriptorProto",
                  "id": 5
                },
                "service": {
                  "rule": "repeated",
                  "type": "ServiceDescriptorProto",
                  "id": 6
                },
                "extension": {
                  "rule": "repeated",
                  "type": "FieldDescriptorProto",
                  "id": 7
                },
                "options": {
                  "type": "FileOptions",
                  "id": 8
                },
                "sourceCodeInfo": {
                  "type": "SourceCodeInfo",
                  "id": 9
                },
                "syntax": {
                  "type": "string",
                  "id": 12
                }
              }
            },
            "DescriptorProto": {
              "fields": {
                "name": {
                  "type": "string",
                  "id": 1
                },
                "field": {
                  "rule": "repeated",
                  "type": "FieldDescriptorProto",
                  "id": 2
                },
                "extension": {
                  "rule": "repeated",
                  "type": "FieldDescriptorProto",
                  "id": 6
                },
                "nestedType": {
                  "rule": "repeated",
                  "type": "DescriptorProto",
                  "id": 3
                },
                "enumType": {
                  "rule": "repeated",
                  "type": "EnumDescriptorProto",
                  "id": 4
                },
                "extensionRange": {
                  "rule": "repeated",
                  "type": "ExtensionRange",
                  "id": 5
                },
                "oneofDecl": {
                  "rule": "repeated",
                  "type": "OneofDescriptorProto",
                  "id": 8
                },
                "options": {
                  "type": "MessageOptions",
                  "id": 7
                },
                "reservedRange": {
                  "rule": "repeated",
                  "type": "ReservedRange",
                  "id": 9
                },
                "reservedName": {
                  "rule": "repeated",
                  "type": "string",
                  "id": 10
                }
              },
              "nested": {
                "ExtensionRange": {
                  "fields": {
                    "start": {
                      "type": "int32",
                      "id": 1
                    },
                    "end": {
                      "type": "int32",
                      "id": 2
                    },
                    "options": {
                      "type": "ExtensionRangeOptions",
                      "id": 3
                    }
                  }
                },
                "ReservedRange": {
                  "fields": {
                    "start": {
                      "type": "int32",
                      "id": 1
                    },
                    "end": {
                      "type": "int32",
                      "id": 2
                    }
                  }
                }
              }
            },
            "ExtensionRangeOptions": {
              "fields": {
                "uninterpretedOption": {
                  "rule": "repeated",
                  "type": "UninterpretedOption",
                  "id": 999
                }
              },
              "extensions": [
                [
                  1000,
                  536870911
                ]
              ]
            },
            "FieldDescriptorProto": {
              "fields": {
                "name": {
                  "type": "string",
                  "id": 1
                },
                "number": {
                  "type": "int32",
                  "id": 3
                },
                "label": {
                  "type": "Label",
                  "id": 4
                },
                "type": {
                  "type": "Type",
                  "id": 5
                },
                "typeName": {
                  "type": "string",
                  "id": 6
                },
                "extendee": {
                  "type": "string",
                  "id": 2
                },
                "defaultValue": {
                  "type": "string",
                  "id": 7
                },
                "oneofIndex": {
                  "type": "int32",
                  "id": 9
                },
                "jsonName": {
                  "type": "string",
                  "id": 10
                },
                "options": {
                  "type": "FieldOptions",
                  "id": 8
                }
              },
              "nested": {
                "Type": {
                  "values": {
                    "TYPE_DOUBLE": 1,
                    "TYPE_FLOAT": 2,
                    "TYPE_INT64": 3,
                    "TYPE_UINT64": 4,
                    "TYPE_INT32": 5,
                    "TYPE_FIXED64": 6,
                    "TYPE_FIXED32": 7,
                    "TYPE_BOOL": 8,
                    "TYPE_STRING": 9,
                    "TYPE_GROUP": 10,
                    "TYPE_MESSAGE": 11,
                    "TYPE_BYTES": 12,
                    "TYPE_UINT32": 13,
                    "TYPE_ENUM": 14,
                    "TYPE_SFIXED32": 15,
                    "TYPE_SFIXED64": 16,
                    "TYPE_SINT32": 17,
                    "TYPE_SINT64": 18
                  }
                },
                "Label": {
                  "values": {
                    "LABEL_OPTIONAL": 1,
                    "LABEL_REQUIRED": 2,
                    "LABEL_REPEATED": 3
                  }
                }
              }
            },
            "OneofDescriptorProto": {
              "fields": {
                "name": {
                  "type": "string",
                  "id": 1
                },
                "options": {
                  "type": "OneofOptions",
                  "id": 2
                }
              }
            },
            "EnumDescriptorProto": {
              "fields": {
                "name": {
                  "type": "string",
                  "id": 1
                },
                "value": {
                  "rule": "repeated",
                  "type": "EnumValueDescriptorProto",
                  "id": 2
                },
                "options": {
                  "type": "EnumOptions",
                  "id": 3
                },
                "reservedRange": {
                  "rule": "repeated",
                  "type": "EnumReservedRange",
                  "id": 4
                },
                "reservedName": {
                  "rule": "repeated",
                  "type": "string",
                  "id": 5
                }
              },
              "nested": {
                "EnumReservedRange": {
                  "fields": {
                    "start": {
                      "type": "int32",
                      "id": 1
                    },
                    "end": {
                      "type": "int32",
                      "id": 2
                    }
                  }
                }
              }
            },
            "EnumValueDescriptorProto": {
              "fields": {
                "name": {
                  "type": "string",
                  "id": 1
                },
                "number": {
                  "type": "int32",
                  "id": 2
                },
                "options": {
                  "type": "EnumValueOptions",
                  "id": 3
                }
              }
            },
            "ServiceDescriptorProto": {
              "fields": {
                "name": {
                  "type": "string",
                  "id": 1
                },
                "method": {
                  "rule": "repeated",
                  "type": "MethodDescriptorProto",
                  "id": 2
                },
                "options": {
                  "type": "ServiceOptions",
                  "id": 3
                }
              }
            },
            "MethodDescriptorProto": {
              "fields": {
                "name": {
                  "type": "string",
                  "id": 1
                },
                "inputType": {
                  "type": "string",
                  "id": 2
                },
                "outputType": {
                  "type": "string",
                  "id": 3
                },
                "options": {
                  "type": "MethodOptions",
                  "id": 4
                },
                "clientStreaming": {
                  "type": "bool",
                  "id": 5,
                  "options": {
                    "default": false
                  }
                },
                "serverStreaming": {
                  "type": "bool",
                  "id": 6,
                  "options": {
                    "default": false
                  }
                }
              }
            },
            "FileOptions": {
              "fields": {
                "javaPackage": {
                  "type": "string",
                  "id": 1
                },
                "javaOuterClassname": {
                  "type": "string",
                  "id": 8
                },
                "javaMultipleFiles": {
                  "type": "bool",
                  "id": 10,
                  "options": {
                    "default": false
                  }
                },
                "javaGenerateEqualsAndHash": {
                  "type": "bool",
                  "id": 20,
                  "options": {
                    "deprecated": true
                  }
                },
                "javaStringCheckUtf8": {
                  "type": "bool",
                  "id": 27,
                  "options": {
                    "default": false
                  }
                },
                "optimizeFor": {
                  "type": "OptimizeMode",
                  "id": 9,
                  "options": {
                    "default": "SPEED"
                  }
                },
                "goPackage": {
                  "type": "string",
                  "id": 11
                },
                "ccGenericServices": {
                  "type": "bool",
                  "id": 16,
                  "options": {
                    "default": false
                  }
                },
                "javaGenericServices": {
                  "type": "bool",
                  "id": 17,
                  "options": {
                    "default": false
                  }
                },
                "pyGenericServices": {
                  "type": "bool",
                  "id": 18,
                  "options": {
                    "default": false
                  }
                },
                "phpGenericServices": {
                  "type": "bool",
                  "id": 42,
                  "options": {
                    "default": false
                  }
                },
                "deprecated": {
                  "type": "bool",
                  "id": 23,
                  "options": {
                    "default": false
                  }
                },
                "ccEnableArenas": {
                  "type": "bool",
                  "id": 31,
                  "options": {
                    "default": false
                  }
                },
                "objcClassPrefix": {
                  "type": "string",
                  "id": 36
                },
                "csharpNamespace": {
                  "type": "string",
                  "id": 37
                },
                "swiftPrefix": {
                  "type": "string",
                  "id": 39
                },
                "phpClassPrefix": {
                  "type": "string",
                  "id": 40
                },
                "phpNamespace": {
                  "type": "string",
                  "id": 41
                },
                "phpMetadataNamespace": {
                  "type": "string",
                  "id": 44
                },
                "rubyPackage": {
                  "type": "string",
                  "id": 45
                },
                "uninterpretedOption": {
                  "rule": "repeated",
                  "type": "UninterpretedOption",
                  "id": 999
                }
              },
              "extensions": [
                [
                  1000,
                  536870911
                ]
              ],
              "reserved": [
                [
                  38,
                  38
                ]
              ],
              "nested": {
                "OptimizeMode": {
                  "values": {
                    "SPEED": 1,
                    "CODE_SIZE": 2,
                    "LITE_RUNTIME": 3
                  }
                }
              }
            },
            "MessageOptions": {
              "fields": {
                "messageSetWireFormat": {
                  "type": "bool",
                  "id": 1,
                  "options": {
                    "default": false
                  }
                },
                "noStandardDescriptorAccessor": {
                  "type": "bool",
                  "id": 2,
                  "options": {
                    "default": false
                  }
                },
                "deprecated": {
                  "type": "bool",
                  "id": 3,
                  "options": {
                    "default": false
                  }
                },
                "mapEntry": {
                  "type": "bool",
                  "id": 7
                },
                "uninterpretedOption": {
                  "rule": "repeated",
                  "type": "UninterpretedOption",
                  "id": 999
                }
              },
              "extensions": [
                [
                  1000,
                  536870911
                ]
              ],
              "reserved": [
                [
                  8,
                  8
                ],
                [
                  9,
                  9
                ]
              ]
            },
            "FieldOptions": {
              "fields": {
                "ctype": {
                  "type": "CType",
                  "id": 1,
                  "options": {
                    "default": "STRING"
                  }
                },
                "packed": {
                  "type": "bool",
                  "id": 2
                },
                "jstype": {
                  "type": "JSType",
                  "id": 6,
                  "options": {
                    "default": "JS_NORMAL"
                  }
                },
                "lazy": {
                  "type": "bool",
                  "id": 5,
                  "options": {
                    "default": false
                  }
                },
                "deprecated": {
                  "type": "bool",
                  "id": 3,
                  "options": {
                    "default": false
                  }
                },
                "weak": {
                  "type": "bool",
                  "id": 10,
                  "options": {
                    "default": false
                  }
                },
                "uninterpretedOption": {
                  "rule": "repeated",
                  "type": "UninterpretedOption",
                  "id": 999
                }
              },
              "extensions": [
                [
                  1000,
                  536870911
                ]
              ],
              "reserved": [
                [
                  4,
                  4
                ]
              ],
              "nested": {
                "CType": {
                  "values": {
                    "STRING": 0,
                    "CORD": 1,
                    "STRING_PIECE": 2
                  }
                },
                "JSType": {
                  "values": {
                    "JS_NORMAL": 0,
                    "JS_STRING": 1,
                    "JS_NUMBER": 2
                  }
                }
              }
            },
            "OneofOptions": {
              "fields": {
                "uninterpretedOption": {
                  "rule": "repeated",
                  "type": "UninterpretedOption",
                  "id": 999
                }
              },
              "extensions": [
                [
                  1000,
                  536870911
                ]
              ]
            },
            "EnumOptions": {
              "fields": {
                "allowAlias": {
                  "type": "bool",
                  "id": 2
                },
                "deprecated": {
                  "type": "bool",
                  "id": 3,
                  "options": {
                    "default": false
                  }
                },
                "uninterpretedOption": {
                  "rule": "repeated",
                  "type": "UninterpretedOption",
                  "id": 999
                }
              },
              "extensions": [
                [
                  1000,
                  536870911
                ]
              ],
              "reserved": [
                [
                  5,
                  5
                ]
              ]
            },
            "EnumValueOptions": {
              "fields": {
                "deprecated": {
                  "type": "bool",
                  "id": 1,
                  "options": {
                    "default": false
                  }
                },
                "uninterpretedOption": {
                  "rule": "repeated",
                  "type": "UninterpretedOption",
                  "id": 999
                }
              },
              "extensions": [
                [
                  1000,
                  536870911
                ]
              ]
            },
            "ServiceOptions": {
              "fields": {
                "deprecated": {
                  "type": "bool",
                  "id": 33,
                  "options": {
                    "default": false
                  }
                },
                "uninterpretedOption": {
                  "rule": "repeated",
                  "type": "UninterpretedOption",
                  "id": 999
                }
              },
              "extensions": [
                [
                  1000,
                  536870911
                ]
              ]
            },
            "MethodOptions": {
              "fields": {
                "deprecated": {
                  "type": "bool",
                  "id": 33,
                  "options": {
                    "default": false
                  }
                },
                "idempotencyLevel": {
                  "type": "IdempotencyLevel",
                  "id": 34,
                  "options": {
                    "default": "IDEMPOTENCY_UNKNOWN"
                  }
                },
                "uninterpretedOption": {
                  "rule": "repeated",
                  "type": "UninterpretedOption",
                  "id": 999
                }
              },
              "extensions": [
                [
                  1000,
                  536870911
                ]
              ],
              "nested": {
                "IdempotencyLevel": {
                  "values": {
                    "IDEMPOTENCY_UNKNOWN": 0,
                    "NO_SIDE_EFFECTS": 1,
                    "IDEMPOTENT": 2
                  }
                }
              }
            },
            "UninterpretedOption": {
              "fields": {
                "name": {
                  "rule": "repeated",
                  "type": "NamePart",
                  "id": 2
                },
                "identifierValue": {
                  "type": "string",
                  "id": 3
                },
                "positiveIntValue": {
                  "type": "uint64",
                  "id": 4
                },
                "negativeIntValue": {
                  "type": "int64",
                  "id": 5
                },
                "doubleValue": {
                  "type": "double",
                  "id": 6
                },
                "stringValue": {
                  "type": "bytes",
                  "id": 7
                },
                "aggregateValue": {
                  "type": "string",
                  "id": 8
                }
              },
              "nested": {
                "NamePart": {
                  "fields": {
                    "namePart": {
                      "rule": "required",
                      "type": "string",
                      "id": 1
                    },
                    "isExtension": {
                      "rule": "required",
                      "type": "bool",
                      "id": 2
                    }
                  }
                }
              }
            },
            "SourceCodeInfo": {
              "fields": {
                "location": {
                  "rule": "repeated",
                  "type": "Location",
                  "id": 1
                }
              },
              "nested": {
                "Location": {
                  "fields": {
                    "path": {
                      "rule": "repeated",
                      "type": "int32",
                      "id": 1
                    },
                    "span": {
                      "rule": "repeated",
                      "type": "int32",
                      "id": 2
                    },
                    "leadingComments": {
                      "type": "string",
                      "id": 3
                    },
                    "trailingComments": {
                      "type": "string",
                      "id": 4
                    },
                    "leadingDetachedComments": {
                      "rule": "repeated",
                      "type": "string",
                      "id": 6
                    }
                  }
                }
              }
            },
            "GeneratedCodeInfo": {
              "fields": {
                "annotation": {
                  "rule": "repeated",
                  "type": "Annotation",
                  "id": 1
                }
              },
              "nested": {
                "Annotation": {
                  "fields": {
                    "path": {
                      "rule": "repeated",
                      "type": "int32",
                      "id": 1
                    },
                    "sourceFile": {
                      "type": "string",
                      "id": 2
                    },
                    "begin": {
                      "type": "int32",
                      "id": 3
                    },
                    "end": {
                      "type": "int32",
                      "id": 4
                    }
                  }
                }
              }
            },
            "Any": {
              "fields": {
                "type_url": {
                  "type": "string",
                  "id": 1
                },
                "value": {
                  "type": "bytes",
                  "id": 2
                }
              }
            },
            "Duration": {
              "fields": {
                "seconds": {
                  "type": "int64",
                  "id": 1
                },
                "nanos": {
                  "type": "int32",
                  "id": 2
                }
              }
            },
            "Empty": {
              "fields": {}
            },
            "Timestamp": {
              "fields": {
                "seconds": {
                  "type": "int64",
                  "id": 1
                },
                "nanos": {
                  "type": "int32",
                  "id": 2
                }
              }
            }
          }
        },
        "longrunning": {
          "options": {
            "cc_enable_arenas": true,
            "csharp_namespace": "Google.LongRunning",
            "go_package": "google.golang.org/genproto/googleapis/longrunning;longrunning",
            "java_multiple_files": true,
            "java_outer_classname": "OperationsProto",
            "java_package": "com.google.longrunning",
            "php_namespace": "Google\\LongRunning"
          },
          "nested": {
            "operationInfo": {
              "type": "google.longrunning.OperationInfo",
              "id": 1049,
              "extend": "google.protobuf.MethodOptions"
            },
            "Operations": {
              "methods": {
                "ListOperations": {
                  "requestType": "ListOperationsRequest",
                  "responseType": "ListOperationsResponse",
                  "options": {
                    "(google.api.http).get": "/v1/{name=operations}"
                  }
                },
                "GetOperation": {
                  "requestType": "GetOperationRequest",
                  "responseType": "Operation",
                  "options": {
                    "(google.api.http).get": "/v1/{name=operations/**}"
                  }
                },
                "DeleteOperation": {
                  "requestType": "DeleteOperationRequest",
                  "responseType": "google.protobuf.Empty",
                  "options": {
                    "(google.api.http).delete": "/v1/{name=operations/**}"
                  }
                },
                "CancelOperation": {
                  "requestType": "CancelOperationRequest",
                  "responseType": "google.protobuf.Empty",
                  "options": {
                    "(google.api.http).post": "/v1/{name=operations/**}:cancel",
                    "(google.api.http).body": "*"
                  }
                },
                "WaitOperation": {
                  "requestType": "WaitOperationRequest",
                  "responseType": "Operation"
                }
              }
            },
            "Operation": {
              "oneofs": {
                "result": {
                  "oneof": [
                    "error",
                    "response"
                  ]
                }
              },
              "fields": {
                "name": {
                  "type": "string",
                  "id": 1
                },
                "metadata": {
                  "type": "google.protobuf.Any",
                  "id": 2
                },
                "done": {
                  "type": "bool",
                  "id": 3
                },
                "error": {
                  "type": "google.rpc.Status",
                  "id": 4
                },
                "response": {
                  "type": "google.protobuf.Any",
                  "id": 5
                }
              }
            },
            "GetOperationRequest": {
              "fields": {
                "name": {
                  "type": "string",
                  "id": 1
                }
              }
            },
            "ListOperationsRequest": {
              "fields": {
                "name": {
                  "type": "string",
                  "id": 4
                },
                "filter": {
                  "type": "string",
                  "id": 1
                },
                "pageSize": {
                  "type": "int32",
                  "id": 2
                },
                "pageToken": {
                  "type": "string",
                  "id": 3
                }
              }
            },
            "ListOperationsResponse": {
              "fields": {
                "operations": {
                  "rule": "repeated",
                  "type": "Operation",
                  "id": 1
                },
                "nextPageToken": {
                  "type": "string",
                  "id": 2
                }
              }
            },
            "CancelOperationRequest": {
              "fields": {
                "name": {
                  "type": "string",
                  "id": 1
                }
              }
            },
            "DeleteOperationRequest": {
              "fields": {
                "name": {
                  "type": "string",
                  "id": 1
                }
              }
            },
            "WaitOperationRequest": {
              "fields": {
                "name": {
                  "type": "string",
                  "id": 1
                },
                "timeout": {
                  "type": "google.protobuf.Duration",
                  "id": 2
                }
              }
            },
            "OperationInfo": {
              "fields": {
                "responseType": {
                  "type": "string",
                  "id": 1
                },
                "metadataType": {
                  "type": "string",
                  "id": 2
                }
              }
            }
          }
        },
        "rpc": {
          "options": {
            "go_package": "google.golang.org/genproto/googleapis/rpc/status;status",
            "java_multiple_files": true,
            "java_outer_classname": "StatusProto",
            "java_package": "com.google.rpc",
            "objc_class_prefix": "RPC"
          },
          "nested": {
            "Status": {
              "fields": {
                "code": {
                  "type": "int32",
                  "id": 1
                },
                "message": {
                  "type": "string",
                  "id": 2
                },
                "details": {
                  "rule": "repeated",
                  "type": "google.protobuf.Any",
                  "id": 3
                }
              }
            }
          }
        }
      }
    }
  }
};

