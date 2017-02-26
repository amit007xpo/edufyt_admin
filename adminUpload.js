	
		var adminFileUploadModule = angular.module('adminFileUploadModule', []);

    adminFileUploadModule.controller('adminFileUploadCtrl', ['$scope' ,'$rootScope', function($scope, $rootScope) {



        $scope.t = {
            mathematics : {
                label:'Mathematics', value:'mathematics',
                uOptions : [
                    {label: 'IIT', value: 'iit'},
                    {label: 'NTSE', value: 'ntse'},
                    {label: 'CBSE Board', value: 'cbse_b'}
                ],
                pTopics : [
                {
                	label: 'Light', value: 'light',
                	qSubtopic : [
                	{label: 'Mirror', value: 'mirror'},
                	{label: 'Lense', value: 'lense'},
                	{label: 'Concave', value: 'concave'},
                	{label: 'Convex', value: 'convex' }

                	]
                },
                {
                	label: 'Sound', value: 'sound',
                	pSubtopic : [
                	{label: 'Mirror', value: 'mirror'},
                	{label: 'Lense', value: 'lense'},
                	{label: 'Concave', value: 'concave'},
                	{label: 'Convex', value: 'convex' }

                	]
                },
                {
                	label: 'Rotation', value: 'rotation',
                	qSubtopic : [
                	{label: 'Mirror', value: 'mirror'},
                	{label: 'Lense', value: 'lense'},
                	{label: 'Concave', value: 'concave'},
                	{label: 'Convex', value: 'convex' }

                	]
                },
                {label: 'Gravitation', value: 'gravitaion'}

				]
            },
            physics : {
                label:'Physics', value:'physics',
                uOptions : [
                    {label: 'IIT', value: 'iit'},
                    {label: 'NTSE', value: 'ntse'},
                    {label: 'CBSE Board', value: 'cbse_b'},
                    {label: 'CBSC-PMT', value: 'cbse-pmt'}
                ]
            },
            chemistry : {
                label:'Chemistry', value:'chemistry',
                uOptions : [
                    {label: 'IIT', value: 'iit'},
                    {label: 'NTSE', value: 'ntse'},
                    {label: 'CBSE Board', value: 'cbse_b'},
                    {label: 'CBSC-PMT', value: 'cbse-pmt'}
                ]
            }

        }
    }]);

